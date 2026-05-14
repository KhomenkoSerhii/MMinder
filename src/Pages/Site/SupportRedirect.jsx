import { useEffect } from "react";
import { SUPPORT_FORM_URL } from "@/utils/constants";

function SupportRedirect() {
  useEffect(() => {
    window.location.replace(SUPPORT_FORM_URL);
  }, []);

  return null;
}

export default SupportRedirect;
