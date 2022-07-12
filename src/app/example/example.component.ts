import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core'
import {NgbModalConfig, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { WalletName, WalletReadyState } from '@solana/wallet-adapter-base'
import { ConnectionStore, WalletStore } from '@heavy-duty/wallet-adapter'
import { concatMap, defer, first, from, map, Observable, throwError } from 'rxjs'
import { Keypair, PublicKey, SystemProgram, Transaction, TransactionSignature } from '@solana/web3.js';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
    // example
    readonly connection$ = this._connectionStore.connection$;
    readonly wallets$ = this._walletStore.wallets$;
    readonly wallet$ = this._walletStore.wallet$;
    readonly walletName$ = this.wallet$.pipe(map((wallet) => wallet?.adapter.name || null));
    readonly ready$ = this.wallet$.pipe(map(
        (wallet) => wallet && (wallet.adapter.readyState === WalletReadyState.Installed || wallet.adapter.readyState === WalletReadyState.Loadable))
    );
    readonly connected$ = this._walletStore.connected$;
    readonly publicKey$ = this._walletStore.publicKey$;
    public walletPubKey = {} as PublicKey;
    public anchorWallet$ = this._walletStore.anchorWallet$;
    public isWalletInit = false;
    public isModalOpen = false;
    public lamports = 0;
    public recipient = '';
    public modalHeader = '';
    public modalText = '';

    constructor(
        private modalService: NgbModal,
        private readonly _connectionStore: ConnectionStore,
        private readonly _walletStore: WalletStore
    ) {
    }

    ngOnInit(): void {

    }
    onConnect() {
        this._walletStore.connect().subscribe();
    }

    onDisconnect() {
        this._walletStore.disconnect().subscribe();
    }

    onSelectWallet(walletName: WalletName) {
        this._walletStore.selectWallet(walletName);
    }

}
