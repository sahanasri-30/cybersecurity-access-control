import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("Admin");
  const [resource, setResource] = useState("Examination");
  const [permission, setPermission] = useState("Read");
  const [result, setResult] = useState(null);
  const [logs, setLogs] = useState([]);

  const permissions = {
    Admin: {
      Examination: ["Read", "Write", "Delete"],
      Library: ["Read", "Write", "Delete"],
      Finance: ["Read", "Write", "Delete"],
    },
    Faculty: {
      Examination: ["Read", "Write"],
      Library: ["Read"],
      Finance: [],
    },
    Student: {
      Examination: [],
      Library: ["Read"],
      Finance: [],
    },
  };

  const checkAccess = () => {
    const validRole = user !== "";

    const hasPermission =
        permissions[user][resource]?.includes(permission) || false;

    const accessGranted = validRole && hasPermission;

    const newResult = {
      validRole,
      hasPermission,
      accessGranted,
    };

    setResult(newResult);

    const newLog = {
      id: Date.now(),
      time: new Date().toLocaleTimeString(),
      user,
      resource,
      permission,
      result: accessGranted ? "GRANTED" : "DENIED",
    };

    setLogs((previousLogs) => [newLog, ...previousLogs]);
  };

  return (
      <div className="app">
        <header className="header">
          <div>
            <h1>🔐 Cybersecurity Access Control</h1>
            <p>Discrete Mathematics Capstone Project</p>
          </div>

          <div className="team">TEAM 12</div>
        </header>

        <main className="container">

          <section className="welcome">
            <h2>Access Control Dashboard</h2>
            <p>
              Evaluate user permissions using Discrete Mathematics concepts.
            </p>
          </section>

          <section className="card">

            <h3>Access Evaluation</h3>

            <div className="form-grid">

              <div>
                <label>User Role</label>
                <select
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                >
                  <option>Admin</option>
                  <option>Faculty</option>
                  <option>Student</option>
                </select>
              </div>

              <div>
                <label>Resource</label>
                <select
                    value={resource}
                    onChange={(e) => setResource(e.target.value)}
                >
                  <option>Examination</option>
                  <option>Library</option>
                  <option>Finance</option>
                </select>
              </div>

              <div>
                <label>Permission</label>
                <select
                    value={permission}
                    onChange={(e) => setPermission(e.target.value)}
                >
                  <option>Read</option>
                  <option>Write</option>
                  <option>Delete</option>
                </select>
              </div>

            </div>

            <button onClick={checkAccess}>
              CHECK ACCESS
            </button>

          </section>

          {result && (
              <section className="result-card">

                <h3>Mathematical Evaluation</h3>

                <div className="evaluation">

                  <p>
                    Valid Role:
                    <strong>{result.validRole ? " TRUE" : " FALSE"}</strong>
                  </p>

                  <p>
                    Required Permission:
                    <strong>
                      {result.hasPermission ? " TRUE" : " FALSE"}
                    </strong>
                  </p>

                  <div className="formula">
                    Access = Valid Role ∧ Required Permission
                  </div>

                  <div className="calculation">
                    {result.validRole ? "TRUE" : "FALSE"} ∧{" "}
                    {result.hasPermission ? "TRUE" : "FALSE"}
                    {" = "}
                    {result.accessGranted ? "TRUE" : "FALSE"}
                  </div>

                  <div
                      className={
                        result.accessGranted
                            ? "access granted"
                            : "access denied"
                      }
                  >
                    {result.accessGranted
                        ? "✓ ACCESS GRANTED"
                        : "✕ ACCESS DENIED"}
                  </div>

                </div>

              </section>
          )}

          <section className="concepts">

            <h3>Discrete Mathematics Concepts</h3>

            <div className="concept-grid">

              <div className="concept">
                <span>∪</span>
                <h4>Sets</h4>

                <p>
                  <strong>U</strong> = {"{Admin, Faculty, Student}"}
                </p>

                <p>
                  <strong>R</strong> = {"{Examination, Library, Finance}"}
                </p>

                <p>
                  <strong>P</strong> = {"{Read, Write, Delete}"}
                </p>
              </div>

              <div className="concept">
                <span>↔</span>
                <h4>Relations</h4>

                <p>User → Role</p>
                <p>Role → Resource</p>
                <p>Role → Permission</p>

                <div className="relation">
                  Student_01 → Student → Library → Read
                </div>
              </div>

              <div className="concept">
                <span>∧</span>
                <h4>Propositional Logic</h4>

                <p>A = Valid Role</p>
                <p>B = Required Permission</p>

                <div className="formula">
                  Access = A ∧ B
                </div>
              </div>

              <div className="concept">
                <span>01</span>
                <h4>Boolean Algebra</h4>

                <p>TRUE = 1</p>
                <p>FALSE = 0</p>

                <div className="formula">
                  1 ∧ 1 = 1
                </div>
              </div>

            </div>

            <div className="truth-table">

              <h3>Truth Table — AND Operation</h3>

              <table>
                <thead>
                <tr>
                  <th>A</th>
                  <th>B</th>
                  <th>A ∧ B</th>
                  <th>Access</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                  <td>TRUE</td>
                  <td>TRUE</td>
                  <td>TRUE</td>
                  <td className="granted-text">Granted</td>
                </tr>

                <tr>
                  <td>TRUE</td>
                  <td>FALSE</td>
                  <td>FALSE</td>
                  <td className="denied-text">Denied</td>
                </tr>

                <tr>
                  <td>FALSE</td>
                  <td>TRUE</td>
                  <td>FALSE</td>
                  <td className="denied-text">Denied</td>
                </tr>

                <tr>
                  <td>FALSE</td>
                  <td>FALSE</td>
                  <td>FALSE</td>
                  <td className="denied-text">Denied</td>
                </tr>
                </tbody>
              </table>

            </div>

          </section>
          <section className="logs">

            <h3>📜 Access Activity Log</h3>

            {logs.length === 0 ? (
                <p className="empty-log">
                  No access attempts recorded yet.
                </p>
            ) : (
                <table>

                  <thead>
                  <tr>
                    <th>Time</th>
                    <th>User Role</th>
                    <th>Resource</th>
                    <th>Permission</th>
                    <th>Result</th>
                  </tr>
                  </thead>

                  <tbody>
                  {logs.map((log) => (
                      <tr key={log.id}>
                        <td>{log.time}</td>
                        <td>{log.user}</td>
                        <td>{log.resource}</td>
                        <td>{log.permission}</td>

                        <td
                            className={
                              log.result === "GRANTED"
                                  ? "granted-text"
                                  : "denied-text"
                            }
                        >
                          {log.result}
                        </td>
                      </tr>
                  ))}
                  </tbody>

                </table>
            )}

          </section>
        </main>

        <footer>
          Team 12 • Discrete Mathematics • Cybersecurity Access Control System
        </footer>

      </div>
  );
}

export default App;