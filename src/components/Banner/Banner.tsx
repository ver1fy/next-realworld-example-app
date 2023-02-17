type BannerProps = {
  title: string;
  tagline?: string;
};

export const Banner = ({ title, tagline }: BannerProps) => (
  <div className="banner">
    <div className="container">
      <h1 className="logo-font">{title}</h1>
      {tagline && <p>{tagline}</p>}
    </div>
  </div>
);
