import { Visibility } from "@mui/icons-material";
import "./widgetSm.css";
import { useEffect, useState } from "react";
import axios from "axios";

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODA4OTBmYTdiMGE4YmY0MDM1ZjdlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjIyMDM4MywiZXhwIjoxNjg2NjUyMzgzfQ.f8yxbdjRoiBV4-hfL1mpHghACc45c-vPYyVMILyiuuQ",
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              }
              alt="profilePic"
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
