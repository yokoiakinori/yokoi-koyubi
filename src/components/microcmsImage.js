import React from "react";
export default function MicroCmsImg(props) {
  const { url } = props;
  let array = Object.values(props);
  let param = "";
  array.map(function (elem) {
    if (array.indexOf(elem) !== 0) {
      if (array.indexOf(elem) == 1) {
        param = `?${elem}`;
      } else {
        param = `${param}&${elem}`;
      }
    }
  });

  return (
    <>
      <img src={url + param} alt="" />
    </>
  );
}
