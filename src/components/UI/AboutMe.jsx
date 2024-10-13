export default function AboutMe() {
  return (
    <>
      <div className="container text-center my-5">
        <h2 className="fw-bold mb-4">About Me</h2>
        <img
          src="src\assets\profilepic.jpg"
          alt="Cole Kisielius"
          className="img-fluid rounded-circle mb-4"
          style={{ maxWidth: "200px" }}
        />
        <p className="lead">
          Hi, my name is Cole Kisielius, I&apos;m a developer based out of North
          Carolina. I use JavaScript, mainly using the MERN stack.
        </p>
      </div>
    </>
  );
}
