import { handlePlaceholderClick } from "../../utils/utils";
import { Button } from "../Button/Button";
import { ContentElement } from "../ContentElement/ContentElement";
import { useUrlShortenerContext } from "../../context/UrlShortenerContext";
import { useEffect, useState } from "react";

export const Content = () => {
  const { urlsArray, setUrlsArray } = useUrlShortenerContext();
  const [copiedUrl, setCopiedUrl] = useState<string>("");

  // copying the shortened url

  const handleCopyButtonClick = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      const text = await navigator.clipboard.readText();

      if (text === url) {
        setCopiedUrl(text);
      } else {
        alert("URL was not copied! Check the console");
      }
    } catch (error) {
      console.error("Error while copying the URL:", error);
    }
  };

  // deleting the URL from the urlsArray

  const handleDeleteUrl = (index: number) => {
    const filteredUrls = urlsArray.filter((_url, i) => i !== index);
    setUrlsArray(filteredUrls);
  };

  // loading the urlsArray from the local storage

  useEffect(() => {
    const savedUrls = localStorage.getItem("urlsArray");
    if (savedUrls && savedUrls.length > 0) {
      setUrlsArray(JSON.parse(savedUrls));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="content">
      <div className="content-wrapper horizontal-padding col">
        {urlsArray.length > 0
          ? urlsArray.map((e, index) => (
              <div key={index} className="content-shortened-link row">
                <div className="content-org-url-wrapper">
                  <p className="content-org-url">{e.orgUrl}</p>
                </div>
                <div className="content-short-link-wrapper row">
                  <p>{e.shortUrl}</p>
                  <button
                    className={
                      copiedUrl === e.shortUrl
                        ? "button-primary button-short-url copied"
                        : "button-primary button-short-url"
                    }
                    onClick={() => handleCopyButtonClick(e.shortUrl)}
                  >
                    {copiedUrl === e.shortUrl ? "Copied!" : "Copy"}
                  </button>
                  <Button
                    onClick={() => handleDeleteUrl(index)}
                    className="button-primary button-delete"
                  >
                    X
                  </Button>
                </div>
              </div>
            ))
          : null}
        <div className="content-header col">
          <h2 className="content-header-text">Advanced Statistics</h2>
          <p className="content-header-paragraph">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="content-elements-wrapper col">
          <hr className="separator" />
          <div className="content-elements row">
            <ContentElement
              img={"./icons/icon-brand-recognition.svg"}
              altImg={"chart icon"}
              className={"content-element-wrapper"}
            >
              <h3 className="content-element-header">Brand Recognition</h3>
              <p className="content-element-paragraph">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </ContentElement>
            <ContentElement
              img={"./icons/icon-detailed-records.svg"}
              altImg={"potentiometer icon"}
              className={"content-element-wrapper content-element-margin-1"}
            >
              <h3 className="content-element-header">Detailed Records</h3>
              <p className="content-element-paragraph">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </ContentElement>
            <ContentElement
              img={"./icons/icon-fully-customizable.svg"}
              altImg={"three brushes"}
              className={"content-element-wrapper content-element-margin-2"}
            >
              <h3 className="content-element-header">Fully Customizable</h3>
              <p className="content-element-paragraph">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </ContentElement>
          </div>
        </div>
      </div>
      <div className="content-cta-wrapper row">
        <div className="content-cta col">
          <h2 className="content-cta-text content-header-text">
            Boost your links today
          </h2>
          <Button
            className={"button-primary button-cta"}
            onClick={handlePlaceholderClick}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};
