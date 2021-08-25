const Header = ({ page }) => {
  return (
    <div className="flex justify-between fixed w-1/2 z-50 left-1/4 mt-16">
      <img src="/images/header_logo.png" alt="header logo" className="w-1/6" />
      <div className="flex justify-around w-1/4">
        <img src="/images/iconFacebook@2x.png" alt="header facebook" />
        <img src="/images/iconInstagram@2x.png" alt="header instagram" />
        <img src="/images/iconBlog@2x.png" alt="header blog" />
        <img src="/images/iconYoutube@2x.png" alt="header youtube" />
      </div>

      {page === "landing" ? null : (
        <img
          src="/images/btn_down_app@2x.png"
          alt="button download"
          className="z-20 absolute w-56"
          style={{ right: 0, top: 90 }}
        />
      )}
    </div>
  );
};

export default Header;
