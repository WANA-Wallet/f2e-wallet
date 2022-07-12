import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {map, shareReplay} from "rxjs";
import {WalletName, WalletReadyState} from "@solana/wallet-adapter-base";
import {PublicKey} from "@solana/web3.js";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ConnectionStore, WalletStore} from "@heavy-duty/wallet-adapter";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  readonly connection$ = this._connectionStore.connection$;
  readonly wallets$ = this._walletStore.wallets$;
  readonly wallet$ = this._walletStore.wallet$;
  readonly walletName$ = this.wallet$.pipe(map((wallet) => wallet?.adapter.name || 'default'));
  readonly ready$ = this.wallet$.pipe(map(
    (wallet) => wallet && (wallet.adapter.readyState === WalletReadyState.Installed || wallet.adapter.readyState === WalletReadyState.Loadable))
  );
  readonly connected$ = this._walletStore.connected$;
  readonly publicKey$ = this._walletStore.publicKey$;
  isShowWalletSelect = false;

  public isModalOpen = false;
  public modalText = '';
  private modal: NgbModalRef | undefined;
  @ViewChild('modal') modalContent: TemplateRef<any> | undefined;


  constructor(
    private modalService: NgbModal,
    private readonly _connectionStore: ConnectionStore,
    private readonly _walletStore: WalletStore
  ) {
  }

  ngOnInit(): void {
    this.connected$.pipe(
      shareReplay(1)
    );
  }

  onConnect() {
    this._walletStore.connect().subscribe();
  }

  onDisconnect() {
    this._walletStore.disconnect().subscribe();
  }

  onSelectWallet(walletName: WalletName) {
    this._walletStore.selectWallet(walletName);
    this.isShowWalletSelect = false;
  }

  onBtnClick() {
    this.isShowWalletSelect = true;
  }
}
