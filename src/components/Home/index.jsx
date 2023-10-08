import React, { useEffect, useState } from "react";
import { Wrap } from "./style";
import { Card, Col, Empty, Modal, Row } from "antd";

import useRequest from "../../hooks/useRequest";
import TimeSpent from "../TimeSpent";
import { useTimeContext } from "../../context/SpentTime";

const Home = () => {
  const { request } = useRequest();
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState();

  const [{ time, isRunning }] = useTimeContext();

  useEffect(() => {
    request({ url: "projects" }).then((res) => {
      setData(res?.data);
    });
    // eslint-disable-next-line
  }, []);
  const showModal = async (item) => {
    try {
      await request({
        url: `tasks/${item}`,
      }).then((res) => {
        setTasks(res);
        setTaskId(item);
      });
    } catch (error) {}

    setIsModalOpen(true);
  };
  useEffect(() => {
    request({
      url: `tasks/${taskId}`,
    }).then((res) => {
      setTasks(res);
    });
    // eslint-disable-next-line
  }, [time]);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Wrap>
      <Row gutter={16} style={{ rowGap: "15px" }}>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={"80%"}
        >
          <Row gutter={16} style={{ rowGap: "15px", width: "100%" }}>
            {tasks?.length ? (
              tasks?.map((task, i) => (
                <Col span={12} key={i}>
                  <Card
                    title={
                      <div style={{ display: "flex" }}>
                        <span>{task?.title}</span>
                        <div style={{ marginLeft: "auto" }}>
                          <TimeSpent
                            task_id={task?._id}
                            sheet={task?.timeSheet}
                            started={isRunning}
                          />
                        </div>
                      </div>
                    }
                    bordered={false}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <ul>
                        time spent:
                        {task?.timeSheet?.map((time, i) => (
                          <li style={{ marginLeft: "auto" }} key={i}>
                            {`${Math.floor(time / 3600)}h: ${Math.floor(
                              (time % 3600) / 60
                            )}min: ${time % 60}sec`}
                          </li>
                        ))}
                      </ul>
                      <div>
                        <h2> Total Time:</h2>
                        <Wrap.Time
                          stop={
                            task?.time !== Number
                              ? task?.time - task?.totalTime
                              : 10
                          }
                        >
                          {task?.totalTime
                            ? `${Math.floor(
                                task?.totalTime / 3600
                              )}h: ${Math.floor(
                                (task?.totalTime % 3600) / 60
                              )}min: ${task?.totalTime % 60}sec`
                            : "0h: 0min: 0sec"}
                        </Wrap.Time>

                        <h4 style={{ marginTop: "10px" }}>Given Time:</h4>
                        <h4>
                          {`${Math.floor(task?.time / 3600)}h: ${Math.floor(
                            (task?.time % 3600) / 60
                          )}min: ${task?.time % 60}sec`}
                        </h4>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))
            ) : (
              <Empty />
            )}
          </Row>
        </Modal>
        {data?.length ? (
          data?.map((item, i) => (
            <Col span={8} key={i}>
              <Card title={item?.title}>
                <h3
                  style={{ cursor: "pointer" }}
                  onClick={() => showModal(item?._id)}
                >
                  Show the Tasks
                </h3>
              </Card>
            </Col>
          ))
        ) : (
          <Empty />
        )}
      </Row>
    </Wrap>
  );
};

export default Home;
