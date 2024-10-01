import { Clock } from "lucide-react";

function Logo(props) {
  return (
    <div className="text-primary">
      <Clock {...props} />
    </div>
  );
}

export default Logo;
