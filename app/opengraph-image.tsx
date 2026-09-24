import { ImageResponse } from "next/og";

export const alt = "Amirae Studio — 3D design, prototyping and physical modeling";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// //ADD IMAGE HERE — optional: replace this generated card with a designed 1200×630 banner (app/opengraph-image.jpg).
const PHOTO = "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/f1.jpg";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#0b0b0b" }}>
        <img src={PHOTO} alt="" width={1200} height={630} style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 64,
            color: "white",
            backgroundImage: "linear-gradient(to top, rgba(11,11,11,0.9), rgba(11,11,11,0.1))",
          }}
        >
          <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: -3 }}>Amirae Studio</div>
          <div style={{ fontSize: 34, opacity: 0.85, marginTop: 12 }}>
            3D design, prototyping & physical modeling
          </div>
        </div>
      </div>
    ),
    size,
  );
}
