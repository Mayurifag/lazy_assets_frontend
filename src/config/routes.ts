import IRoute from "interfaces/route";
import TransactionsPage from "pages/transactions";
import AssetsPage from "pages/assets";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Transactions",
    component: TransactionsPage,
    exact: true,
  },
  {
    path: "/assets",
    name: "Assets",
    component: AssetsPage,
    exact: true,
  },
];

export default routes;
