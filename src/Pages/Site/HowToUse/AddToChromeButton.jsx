import { Button } from "@/Components/UI/Button";
import { CHROME_REDIRECT_URL } from "@/utils/constants";

const AddToChromeButton = () => (
  <Button
    variant="primary"
    size="lg"
    className="flex w-full flex-col lg:w-max"
    onClick={() => window.open(CHROME_REDIRECT_URL, "_blank")}
    data-gtm="add-to-chrome-how-to-use"
  >
    Add to Chrome
    <p className="text-xs font-normal">It&apos;s free to get started</p>
  </Button>
);

export default AddToChromeButton;
