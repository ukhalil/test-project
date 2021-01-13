import React from 'react';
import { Link } from "gatsby"
import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';





const SecondPage = () => (

  ReactDOM.render(
    <MessengerCustomerChat
      pageId="102914977926263"
      appId="474727910208022"
      htmlRef="<REF_STRING>"
    />,
    document.getElementById('demo')
  );



export default SecondPage
