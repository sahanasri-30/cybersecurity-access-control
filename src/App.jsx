import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("Admin");
  const [resource, setResource] = useState("Examination");
  const [permission, setPermission] = useState("Read");
  const [result, setResult] = useState(null);
  const [logs, setLogs] = useState([]);
  const [algebraA, setAlgebraA] = useState("0");
  const [algebraB, setAlgebraB] = useState("1");
  const [graphRole, setGraphRole] = useState("Admin");


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

          {/* Added for Capstone Review 2 — Units IV and V. Existing Units I–III remain above unchanged. */}
          <section className="advanced-units" aria-label="Discrete Mathematics Units IV and V">
            <div className="unit-heading">
              <span className="unit-tag">UNIT IV</span>
              <div>
                <h2>Algebraic System</h2>
                <p>Explore algebraic structures and connect them to permission-policy transformations.</p>
              </div>
            </div>

            <div className="unit-panel">
              <h3>1. Binary Operation Explorer</h3>
              <p className="unit-description">Select two values from the Boolean set B = {"{0, 1}"}. The operation shown is XOR (exclusive OR), a binary operation that returns 1 when the inputs differ.</p>
              <div className="algebra-controls">
                <label>First value
                  <select value={algebraA} onChange={(e) => setAlgebraA(e.target.value)}>
                    <option value="0">0 (FALSE)</option>
                    <option value="1">1 (TRUE)</option>
                  </select>
                </label>
                <label>Second value
                  <select value={algebraB} onChange={(e) => setAlgebraB(e.target.value)}>
                    <option value="0">0 (FALSE)</option>
                    <option value="1">1 (TRUE)</option>
                  </select>
                </label>
                <div className="operation-result">
                  <span>{algebraA} ⊕ {algebraB}</span>
                  <strong>{Number(algebraA) ^ Number(algebraB)}</strong>
                  <small>{(Number(algebraA) ^ Number(algebraB)) ? "TRUE" : "FALSE"}</small>
                </div>
              </div>
              <div className="math-note"><strong>Note:</strong> XOR is used here to demonstrate a binary operation on { "{0, 1}" }. It is an illustrative algebra example, not a replacement for the existing access rule A ∧ B.</div>
            </div>

            <div className="unit-two-column">
              <div className="unit-panel">
                <h3>2. Group Properties — Concept Check</h3>
                <p className="unit-description">The set { "{0, 1}" } with XOR forms a group. Use the table to observe the operation.</p>
                <table className="math-table">
                  <thead><tr><th>⊕</th><th>0</th><th>1</th></tr></thead>
                  <tbody><tr><th>0</th><td>0</td><td>1</td></tr><tr><th>1</th><td>1</td><td>0</td></tr></tbody>
                </table>
                <ul className="unit-list">
                  <li><strong>Closure:</strong> every result belongs to { "{0, 1}" }.</li>
                  <li><strong>Identity:</strong> 0, because a ⊕ 0 = a.</li>
                  <li><strong>Inverse:</strong> each element is its own inverse.</li>
                  <li><strong>Associativity:</strong> XOR is associative.</li>
                </ul>
              </div>
              <div className="unit-panel">
                <h3>3. Permission Policy as a Mapping</h3>
                <p className="unit-description">A policy transformation can map each role-resource pair to an allowed-permission set. Compare the existing rules without changing them.</p>
                <div className="policy-map">
                  <div><span>Admin + Finance</span><strong>{ "{Read, Write, Delete}" }</strong></div>
                  <div><span>Faculty + Examination</span><strong>{ "{Read, Write}" }</strong></div>
                  <div><span>Student + Library</span><strong>{ "{Read}" }</strong></div>
                </div>
                <p className="math-note">These examples illustrate a mapping between entities and permission sets. They are not claimed to be a group homomorphism; such a claim would require defined operations that preserve the algebraic structure.</p>
              </div>
            </div>

            <div className="unit-two-column">
              <div className="unit-panel">
                <h3>4. Subgroups &amp; Lagrange's Theorem</h3>
                <p className="unit-description">For the group G = ({ "{0, 1}" }, ⊕), where ⊕ is XOR:</p>
                <div className="policy-map">
                  <div><span>Subgroup H₁</span><strong>{ "{0}" } (identity-only subgroup)</strong></div>
                  <div><span>Subgroup H₂</span><strong>{ "{0, 1}" } (the entire group)</strong></div>
                </div>
                <p className="unit-description">Lagrange's theorem says the order of any subgroup of a finite group divides the order of the group.</p>
                <table className="math-table">
                  <thead><tr><th>Group / subgroup</th><th>Order</th><th>Divides |G| = 2?</th></tr></thead>
                  <tbody><tr><td>G = { "{0, 1}" }</td><td>2</td><td>Yes</td></tr><tr><td>H₁ = { "{0}" }</td><td>1</td><td>Yes (1 divides 2)</td></tr><tr><td>H₂ = G</td><td>2</td><td>Yes (2 divides 2)</td></tr></tbody>
                </table>
              </div>
              <div className="unit-panel">
                <h3>5. Homomorphism</h3>
                <p className="unit-description">A homomorphism preserves the operation. The identity mapping f(x) = x on the XOR group is a valid example.</p>
                <div className="formula">f(a ⊕ b) = f(a) ⊕ f(b)</div>
                <div className="operation-result">
                  <span>f({algebraA} ⊕ {algebraB})</span>
                  <strong>{Number(algebraA) ^ Number(algebraB)}</strong>
                  <small>Both sides are equal</small>
                </div>
                <p className="math-note">The permission mapping shown earlier is a relation, not automatically a homomorphism. A homomorphism must preserve explicitly defined operations.</p>
              </div>
            </div>

            <div className="unit-panel">
              <h3>6. Vector Space, Linear Independence, Basis &amp; Dimension</h3>
              <p className="unit-description">For a mathematical illustration, encode each role as a vector in R³ ordered by (Examination, Library, Finance). A 1 means the role has at least one permission for that resource.</p>
              <table className="math-table">
                <thead><tr><th>Role vector</th><th>Examination</th><th>Library</th><th>Finance</th></tr></thead>
                <tbody>
                  <tr><th>Admin v₁</th><td>1</td><td>1</td><td>1</td></tr>
                  <tr><th>Faculty v₂</th><td>1</td><td>1</td><td>0</td></tr>
                  <tr><th>Student v₃</th><td>0</td><td>1</td><td>0</td></tr>
                </tbody>
              </table>
              <div className="unit-two-column">
                <div className="concept-definition"><strong>Linear independence:</strong> these three vectors are linearly independent (the matrix with these rows has determinant 1, which is non-zero).</div>
                <div className="concept-definition"><strong>Basis &amp; dimension:</strong> the three independent vectors span R³, so they form a basis of R³ and its dimension is 3.</div>
              </div>
              <p className="math-note"><strong>Linear dependence example:</strong> v₄ = v₁ + v₂ = (2, 2, 1) is a linear combination of existing vectors; therefore the set { "{v₁, v₂, v₄}" } is linearly dependent. This vector model is for mathematical analysis only and does not alter actual permissions.</p>
            </div>

            <div className="unit-heading unit-heading-v">
              <span className="unit-tag">UNIT V</span>
              <div>
                <h2>Graph Theory</h2>
                <p>Visualize how roles connect to resources and which permissions are associated with them.</p>
              </div>
            </div>

            <div className="unit-panel">
              <h3>1. Access Relationship Graph</h3>
              <p className="unit-description">This graph is derived from the project's existing permission data. Choose a role to highlight its accessible resources and inspect the adjacency matrix below.</p>
              <label className="graph-select">Highlight role
                <select value={graphRole} onChange={(e) => setGraphRole(e.target.value)}>
                  <option>Admin</option><option>Faculty</option><option>Student</option>
                </select>
              </label>
              <div className="access-graph" role="img" aria-label={`Bipartite graph of ${graphRole} role connections to resources`}>
                <div className="graph-column">
                  <span className="graph-column-title">ROLES</span>
                  {["Admin", "Faculty", "Student"].map((role) => (
                    <div key={role} className={`graph-node role-node ${graphRole === role ? "selected" : ""}`}>{role}</div>
                  ))}
                </div>
                <svg className="graph-lines" viewBox="0 0 400 230" preserveAspectRatio="none" aria-hidden="true">
                  {[
                    {role:"Admin", y:52, resource:"Examination", ry:52},
                    {role:"Admin", y:52, resource:"Library", ry:115},
                    {role:"Admin", y:52, resource:"Finance", ry:178},
                    {role:"Faculty", y:115, resource:"Examination", ry:52},
                    {role:"Faculty", y:115, resource:"Library", ry:115},
                    {role:"Student", y:178, resource:"Library", ry:115},
                  ].map((edge, i) => (
                    <line key={i} x1="10" y1={edge.y} x2="390" y2={edge.ry}
                      className={edge.role === graphRole ? "edge-active" : "edge-muted"} />
                  ))}
                </svg>
                <div className="graph-column">
                  <span className="graph-column-title">RESOURCES</span>
                  {["Examination", "Library", "Finance"].map((res) => {
                    const permitted = permissions[graphRole][res].length > 0;
                    return <div key={res} className={`graph-node resource-node ${permitted ? "connected" : "unconnected"}`}>
                      {res}<small>{permitted ? permissions[graphRole][res].join(" · ") : "No permission"}</small>
                    </div>;
                  })}
                </div>
              </div>
              <p className="graph-caption">Edges represent role-to-resource relationships with at least one permission under the current policy. Permission details are listed inside each resource node.</p>
            </div>

            <div className="unit-panel">
              <h3>2. Graph Adjacency Matrix (6 × 6)</h3>
              <p className="unit-description">The adjacency matrix is square because each row and column represents one graph vertex. A 1 shows an edge between the row vertex and column vertex; 0 means no edge. The graph is undirected, so the matrix is symmetric.</p>
              <div className="matrix-scroll">
                <table className="math-table compact-matrix">
                  <thead><tr><th>Vertex</th>{["Admin","Faculty","Student","Examination","Library","Finance"].map((node) => <th key={node}>{node}</th>)}</tr></thead>
                  <tbody>
                    {["Admin","Faculty","Student","Examination","Library","Finance"].map((row) => (
                      <tr key={row} className={row === graphRole ? "matrix-selected" : ""}>
                        <th>{row}</th>
                        {["Admin","Faculty","Student","Examination","Library","Finance"].map((col) => {
                          const rowIsRole = ["Admin","Faculty","Student"].includes(row);
                          const colIsRole = ["Admin","Faculty","Student"].includes(col);
                          const adjacent = rowIsRole !== colIsRole && (
                            rowIsRole ? permissions[row][col].length > 0 : permissions[col][row].length > 0
                          );
                          return <td key={col}>{adjacent ? "1" : "0"}</td>;
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="math-note">Vertex order: Admin, Faculty, Student, Examination, Library, Finance. This matrix represents the same role-resource graph displayed above.</p>
            </div>

            <div className="unit-two-column">
              <div className="unit-panel">
                <h3>3. Role–Resource Incidence Matrix</h3>
                <p className="unit-description">A value of 1 means the selected role has at least one permission for that resource; 0 means no permission is assigned.</p>
                <table className="math-table">
                  <thead><tr><th>Role</th><th>Examination</th><th>Library</th><th>Finance</th></tr></thead>
                  <tbody>{["Admin","Faculty","Student"].map((role) => <tr key={role} className={graphRole === role ? "matrix-selected" : ""}>
                    <th>{role}</th>
                    {["Examination","Library","Finance"].map((res) => <td key={res}>{permissions[role][res].length > 0 ? "1" : "0"}</td>)}
                  </tr>)}</tbody>
                </table>
                <p className="math-note">This rectangular incidence matrix shows role-resource links derived from the current permission relation.</p>
              </div>
              <div className="unit-panel">
                <h3>4. Graph Theory Concepts</h3>
                <div className="concept-definition"><strong>Vertices:</strong> roles and resources represented as nodes.</div>
                <div className="concept-definition"><strong>Edges:</strong> a role-resource link exists when one or more permissions are assigned.</div>
                <div className="concept-definition"><strong>Connectivity:</strong> helps identify which resources a role can reach in this model.</div>
                <div className="concept-definition"><strong>Tree hierarchy:</strong> a possible extension for nested roles; the current graph is not necessarily a tree.</div>
                <div className="concept-definition"><strong>Euler / Hamilton paths:</strong> graph traversal concepts from the syllabus; they are taught here conceptually and are not used to grant permissions.</div>
              </div>
            </div>
            <div className="unit-two-column">
              <div className="unit-panel">
                <h3>5. Special Types of Graphs</h3>
                <div className="concept-definition"><strong>Simple graph:</strong> no self-loops or multiple edges between the same pair of vertices.</div>
                <div className="concept-definition"><strong>Path graph:</strong> vertices are joined in a sequence.</div>
                <div className="concept-definition"><strong>Cycle graph:</strong> a path that closes back to its starting vertex.</div>
                <div className="concept-definition"><strong>Complete graph:</strong> every pair of distinct vertices is connected by an edge.</div>
                <div className="concept-definition"><strong>Bipartite graph:</strong> vertices are separated into two sets, with edges only between the sets. The role-to-resource model shown here is bipartite.</div>
                <div className="concept-definition"><strong>Tree:</strong> a connected graph with no cycles. A hierarchy could be modeled as a tree when those conditions hold.</div>
              </div>
              <div className="unit-panel">
                <h3>6. Graph Isomorphism &amp; Paths</h3>
                <p className="unit-description">Two graphs are isomorphic when a one-to-one relabeling of their vertices preserves which vertices are connected.</p>
                <div className="isomorphism-demo">
                  <div>
                    <span className="demo-label">Graph A</span>
                    <svg viewBox="0 0 160 110" role="img" aria-label="Triangle graph with vertices A B and C">
                      <line x1="80" y1="18" x2="28" y2="88" />
                      <line x1="80" y1="18" x2="132" y2="88" />
                      <line x1="28" y1="88" x2="132" y2="88" />
                      <circle cx="80" cy="18" r="13" /><circle cx="28" cy="88" r="13" /><circle cx="132" cy="88" r="13" />
                      <text x="80" y="22">A</text><text x="28" y="92">B</text><text x="132" y="92">C</text>
                    </svg>
                  </div>
                  <div>
                    <span className="demo-label">Graph B</span>
                    <svg viewBox="0 0 160 110" role="img" aria-label="Same triangle graph with vertices X Y and Z">
                      <line x1="80" y1="18" x2="28" y2="88" />
                      <line x1="80" y1="18" x2="132" y2="88" />
                      <line x1="28" y1="88" x2="132" y2="88" />
                      <circle cx="80" cy="18" r="13" /><circle cx="28" cy="88" r="13" /><circle cx="132" cy="88" r="13" />
                      <text x="80" y="22">X</text><text x="28" y="92">Y</text><text x="132" y="92">Z</text>
                    </svg>
                  </div>
                </div>
                <p className="math-note">These triangles are isomorphic: the labels differ, but their adjacency structure is the same.</p>
                <div className="concept-definition"><strong>Euler path:</strong> traverses every edge exactly once.</div>
                <div className="concept-definition"><strong>Hamilton path:</strong> visits every vertex exactly once.</div>
                <div className="concept-definition"><strong>Connectivity:</strong> a graph is connected if a path exists between every pair of vertices.</div>
              </div>
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