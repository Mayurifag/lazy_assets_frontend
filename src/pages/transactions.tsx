import React, { useEffect } from "react";
import IPage from "interfaces/page";
import logging from "libs/logging";

const TransactionsPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return <p>This is the Transactions page!</p>;
};

export default TransactionsPage;
