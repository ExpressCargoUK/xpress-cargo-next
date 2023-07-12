import WhatsAppWidget from "react-whatsapp-chat-widget"
import "react-whatsapp-chat-widget/index.css"

const FCWhatsapp = () => {
  return (
    <WhatsAppWidget
      phoneNo="+447875666625"
      position="right"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      autoOpen={true}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt="Hi Team, is there any related service available ?"
      iconSize="40"
      iconColor="white"
      iconBgColor="#031224"
      headerIcon="/assets/images/logo-black.png"
      headerIconColor="pink"
      headerTxtColor="white"
      headerBgColor="#031224"
      headerTitle="Express Cargo UK"
      headerCaption="Online"
      bodyBgColor="#bbb"
      chatPersonName="Support"
      chatMessage={
        <>
          Hi there 👋 <br />
          <br /> How can I help you?
        </>
      }
      footerBgColor="#999"
      placeholder="Type a message.."
      btnBgColor="#031224"
      btnTxt="Start Chat"
      btnTxtColor="#fff"
    />
  )
}

export default FCWhatsapp
