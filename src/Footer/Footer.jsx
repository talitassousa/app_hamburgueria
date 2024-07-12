import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <div className="footer">
      <p>
        SCRN 710/711, Quadra SQS 404 Bloco C - Asa Sul, Brasília - DF,
        70238-030.
      </p>
      <p style={{fontWeight: "bold"}}>
        Peça Online
      </p>
      <p>
        <InstagramIcon /> <WhatsAppIcon /> 
      </p>
    </div>
  );
}

export default Footer;
