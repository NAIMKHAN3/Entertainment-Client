"use client"
//@ts-ignore
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";


const WeChatWhatsup = () => {
  return (
    <WhatsAppWidget
      phoneNo="8801855271276"
      position="left"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      autoOpen={true}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt="Hi Team, is there any related service available ?"
      iconSize="62"
      iconColor="#00246a"
      iconBgColor="#efe9e5"
      headerIcon="https://wop-files.s3.us-west-2.amazonaws.com/cinema-logo.png"
      headerIconColor="#00246a"
      headerTxtColor="white"
      headerBgColor="#00246a"
      headerTitle="Gibs hornet"
      headerCaption="Online"
      bodyBgColor="#bbb"
      chatPersonName="Support"
      chatMessage={
        <>
          Hi there 👋 <br />
          <br /> How can I help you?
        </>
      }
      footerBgColor="#bbb"
      placeholder="Type a message.."
      btnBgColor="#00246a"
      btnTxt="Start Chat"
      btnTxtColor="white"
    />
  );
};

export default WeChatWhatsup;
