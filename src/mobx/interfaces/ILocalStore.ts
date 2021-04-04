/**
 * Локальный store — это такой store, экземпляр которого создаётся в компоненте
 */
export interface ILocalStore {
  /**
   * Любой локальный store должен реализовывать метод destroy, в котором
   */
  destroy(): void;
}
