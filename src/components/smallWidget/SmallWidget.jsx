import "./smallWidget.css";
import { Visibility } from "@material-ui/icons";

export default function SmallWidget() {
  return (
    <div className="smallWidget">
      <span className="smallWidgetTitle">Newly Joined Members</span>
      <ul className="smallWidgetList">
        <li className="smallWidgetListItem">
          <img
            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="smallWidgetIMage"
          />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Jessica Rogers</span>
            <span className="smallWidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" />
            Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img
            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="smallWidgetIMage"
          />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Jessica Rogers</span>
            <span className="smallWidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" />
            Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img
            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="smallWidgetIMage"
          />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Jessica Rogers</span>
            <span className="smallWidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" />
            Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img
            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="smallWidgetIMage"
          />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Jessica Rogers</span>
            <span className="smallWidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" />
            Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img
            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="smallWidgetIMage"
          />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Jessica Rogers</span>
            <span className="smallWidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
