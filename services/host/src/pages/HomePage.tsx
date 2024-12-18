import { Link } from "react-router";

function Hi () {
  return (
    <h1>Hi, I am a homepage</h1>
  )
}

export default function HomePage() {
  return (
    <>
      <Hi />
      <Link to='/shop'>Shop!</Link>
      <Link to='/admin'>Admin!  </Link>
    </>
  );
}
