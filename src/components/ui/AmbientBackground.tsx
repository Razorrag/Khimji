"use client";

export function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      style={{
        backgroundColor: '#0a0a0a',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/download (2).jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  );
}
