import React from 'react';
import './Product.css';

const data = [
  { name: "Jane Cooper", orderId: 1, phone: "(225) 555-0118", email: "jane@microsoft.com", timestamp: "2025-06-20 10:30", status: "Pending" },
  { name: "Kristin Watson", orderId: 2, phone: "(704) 555-0127", email: "kristin@facebook.com", timestamp: "2025-06-20 10:30", status: "Rejected" },
  { name: "Kristin Watson", orderId: 3, phone: "(704) 555-0127", email: "kristin@facebook.com", timestamp: "2025-06-20 10:30", status: "Rejected" },
  { name: "Marvin McKinney", orderId: 4, phone: "(252) 555-0126", email: "marvin@tesla.com", timestamp: "2025-06-20 10:30", status: "Pending" },
  { name: "Jerome Bell", orderId: 5, phone: "(629) 555-0129", email: "jerome@google.com", timestamp: "2025-06-20 10:30", status: "Pending" },
  { name: "Kathryn Murphy", orderId: 6, phone: "(406) 555-0120", email: "kathryn@microsoft.com", timestamp: "2025-06-20 10:30", status: "Approved" },
  { name: "Jacob Jones", orderId: 7, phone: "(208) 555-0112", email: "jacob@yahoo.com", timestamp: "2025-06-20 10:30", status: "Approved" },
  { name: "Kristin Watson", orderId: 8, phone: "(704) 555-0127", email: "kristin@facebook.com", timestamp: "2025-06-20 10:30", status: "Rejected" },
];

function Product() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">entripy</div>
        <nav>
          <ul>
            <li className="active"><span role="img" aria-label="dashboard">📊</span> Dashboard</li>
            <li><span role="img" aria-label="settings">⚙️</span> Settings</li>
            <li><span role="img" aria-label="accounts">👤</span> Accounts</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <input className="search" type="text" placeholder="Search" />
          <select className="sort">
            <option>Sort by : Newest</option>
          </select>
          <div className="user-info">
            <span role="img" aria-label="user">🧑‍💼</span> Adam Smith
            <span role="img" aria-label="bell" className="bell">🔔</span>
          </div>
        </header>
        <section className="dashboard">
          <h1>Flagged Orders Dashboard</h1>
          <div className="subtitle">Orders Pending Review: 3,385</div>
          <table className="product-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Order ID</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Submission Timestamp</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.name}</td>
                  <td>{row.orderId}</td>
                  <td>{row.phone}</td>
                  <td>{row.email}</td>
                  <td>{row.timestamp}</td>
                  <td>
                    <span className={`status ${row.status.toLowerCase()}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="table-footer">
            <span className="entry-count">Showing data 1 to 8 of 12,345 entries</span>
            <div className="pagination">
              <button className="page active">1</button>
              <button className="page">2</button>
              <button className="page">3</button>
              <button className="page">4</button>
              <span className="page">...</span>
              <button className="page">40</button>
              <button className="page">{'>'}</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Product;