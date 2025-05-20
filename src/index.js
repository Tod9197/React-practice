import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./class.css";
import MyHello from "./MyHello";
import EventBasic from "./EventBasic";
import StateBasic from "./StateBasic";
import books from "./books";
import ForList from "./ForList";
import ForNest from "./ForNest";
import ForFilter from "./ForFilter";
import ForSort from "./ForSort";
import SelectStyle from "./SelectStyle";
import StyledPanel from "./StyledPanel";
import TitledPanel from "./TitledPanel";
import StateParent from "./StateParent";
import EventMouse from "./EventMouse";
import EventCompare from "./EventCompare";
import EventError from "./EventError";
import EventObj from "./EventObj";
import EventPoint from "./EventPoint";
import EventKey from "./EventKey";
import EventArgs from "./EventArgs";
import EventArgs2 from "./EventArgs2";
import EventProgation from "./EventProgation";
import EventOnce from "./EventOnce";
import EventPassive from "./EventPassive";
import StateForm from "./StateForm";
import StateFormUC from "./StateFormUC";
import FormTextarea from "./FormTextarea";
import FormSelect from "./FormSelect";
import FormList from "./FormList";
import FormRadio from "./FormRadio";
import FormCheck from "./FormCheck";
import FormCheckMulti from "./FormCheckMulti";
import FormFile from "./FormFile";
import StateNest from "./StateNest";
import StateNestImmer from "./StateNestImmer";
import StateTodo from "./StateTodo";
import FormBasic from "./FormBasic";
import FormYup from "./FormYup";
import FormJapan from "./FormJapan";
import LazyBasic from "./LazyBasic";
import LazyMulti from "./Lazy Multi";
import SuspenseSimple from "./SuspenseSimple";
import SuspenseResult from "./SuspenseResult";
import ProfilerBasic from "./ProfilerBasic";
import StyledBasic from "./StyledBasic";
import StyledComp from "./StyledComp";
import MyButton, { MyStyledButton } from "./StyledComp2";
import StyledProps from "./StyledProps";
import EmotionJsx from "./EmotionJsx";
import EmotionComp from "./EmotionComp";
import PortalBasic from "./PortalBasic";
import ErrorRoot from "./ErrorRoot";
import ErrorRetryRoot from "./ErrorRetryRoot";
import ErrorEventRoot from "./ErrorEventRoot";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <MyHello />
//   </React.StrictMode>
// );
root.render(<ErrorEventRoot />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
