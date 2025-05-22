const layout = ({ children }) => {
  return (
    <div>
      <header>
        <h3>SHOP CAR</h3>
        <p>Choose and buy your car</p>
      </header>
      <div>{children}</div>
      <footer>
        <p>Next.JS course | Shop car Project</p>
      </footer>
    </div>
  );
};

export default layout;
