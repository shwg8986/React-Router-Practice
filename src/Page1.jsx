import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();
  const onClickDetailA = () => history.push("/Page1/DetailA");

  return (
    <div>
      <h1>Page1ページです。</h1>
      <Link to={{ pathname: "/Page1/DetailA", state: arr }}>DetailA</Link>
      <br />
      <Link to={{ pathname: "/Page1/DetailB" }}>DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
