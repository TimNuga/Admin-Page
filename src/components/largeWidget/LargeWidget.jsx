import "./largeWidget.css";

export default function LargeWidget() {
  const Button = ({ type }) => {
    return <button className={"largeWidgetButton " + type}>{type}</button>;
  };
  return (
    <div className="largeWidget">
      <h3 className="largeWidgetTitle">Latest Transactions</h3>
      <table className="largeWidgetTable">
        <tr className="largeWidgetTable">
          <th className="largeWidgetTh">Customer</th>
          <th className="largeWidgetTh">Date</th>
          <th className="largeWidgetTh">Amount</th>
          <th className="largeWidgetTh">Status</th>
        </tr>
        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img
              src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="largeWidgetImage"
            />
            <span className="largeWidgetName">Jessica Rogers</span>
          </td>
          <td className="largeWidgetDate">2 Jun 2021</td>
          <td className="largeWidgetAmount">$122.00</td>
          <td className="largeWidgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img
              src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="largeWidgetImage"
            />
            <span className="largeWidgetName">Jessica Rogers</span>
          </td>
          <td className="largeWidgetDate">2 Jun 2021</td>
          <td className="largeWidgetAmount">$122.00</td>
          <td className="largeWidgetStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img
              src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="largeWidgetImage"
            />
            <span className="largeWidgetName">Jessica Rogers</span>
          </td>
          <td className="largeWidgetDate">2 Jun 2021</td>
          <td className="largeWidgetAmount">$122.00</td>
          <td className="largeWidgetStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img
              src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="largeWidgetImage"
            />
            <span className="largeWidgetName">Jessica Rogers</span>
          </td>
          <td className="largeWidgetDate">2 Jun 2021</td>
          <td className="largeWidgetAmount">$122.00</td>
          <td className="largeWidgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
