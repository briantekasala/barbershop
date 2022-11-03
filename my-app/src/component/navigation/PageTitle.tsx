import * as React from "react";
interface IPageTitle {
  title:string;
}
function PageTitle(props:IPageTitle) {
  const{title}=props;
  return (
    <div className="pageTitle">
      <h1>{title}</h1>
    </div>
  );
}

export default PageTitle;
