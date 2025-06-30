export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/media/deskvideo.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </section>
  );
}
