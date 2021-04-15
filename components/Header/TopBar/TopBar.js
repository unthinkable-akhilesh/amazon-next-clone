import Logo from "./Logo/Logo";
import DoubleText from "./DoubleText/DoubleText";
import SearchBar from "./SearchBar/SearchBar";
import classes from "./TopBar.module.css";
import SelectCountry from "./SelectCountry/SelectCountry";
import { useDispatch, useSelector } from "react-redux";

const isLoggedIn = true;

const TopBar = ({}) => {
  const userDetails = useSelector((state) => {
    return state.userDetails;
  });
  return (
    <div className={classes.TopBar}>
      <Logo src="/amazonStr.png" link="/" isText text=".in" doStyle />
      <DoubleText
        isIcon
        iType="locArrow"
        text1={`Deliver To ${userDetails.first_name}`}
        text2={`${userDetails.location}`}
      />
      <SearchBar />
      <SelectCountry />
      <DoubleText
        isIcon={false}
        text1={`Hello ${userDetails.first_name}`}
        text2={"Accounts & Lists"}
      />
      <DoubleText isIcon={false} text1={"Returns"} text2={"& Orders"} />
      <Logo
        src={"/cart.png"}
        isText={false}
        link={"/cart"}
        width={32}
        height={32}
        userDetails={userDetails}
      />
    </div>
  );
};

export default TopBar;
