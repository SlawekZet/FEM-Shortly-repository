import { useEffect } from "react";
import { Button } from "../Button/Button";
import { useUrlShortenerContext } from "../../context/UrlShortenerContext";

export const Shortener = () => {
  const {
    originalUrl,
    setOriginalUrl,
    shortenedUrl,
    setShortenedUrl,
    urlsArray,
    setUrlsArray,
    setError,
    setLoading,
    error,
    loading,
  } = useUrlShortenerContext();

  // This function checks for errors in the user's input and errors thrown by
  // the API. Then it renders them on the view.

  const errorChecker = () => {
    if (!originalUrl && originalUrl.length === 0) {
      setError("Please provide a URL to shorten");
      return true;
    } else if (originalUrl.includes(" ")) {
      setError(
        "Please remove any spaces from the URL or encode them to %20 or +"
      );
      return true;
    } else if (
      !originalUrl.includes("http://") &&
      !originalUrl.includes("https://")
    ) {
      setError("Please add a protocol http:// or https:// to your URL");
      return true;
    }
    setError("");
    return false;
  };

  // This async function asks an express server based on Netlify to ask
  // the shortening API to shorten the link provided by the user. I'm using
  // a proxy here, because doing it directly in the development phase resul-
  // ted in the CORS issue. Most probably will ask the original API in the
  // prduction version.

  const handleShortenUrl = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!errorChecker()) {
      try {
        setLoading(true);
        const response = await fetch(
          "https://spectacular-babka-fa1a16.netlify.app/shorten-url",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: originalUrl }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to shorten URL");
        }
        const result = await response.json();
        setShortenedUrl(result.shortUrl);
        setLoading(false);
      } catch (error) {
        setError(`An error has occured while shortening URL`);
        setLoading(false);
      }
    }
  };

  // This useEffect function produces the array based on the original URL
  // and shortened URL. Next, it is used to render the list of shortened
  // URLs on the view

  useEffect(() => {
    if (shortenedUrl && shortenedUrl.length > 0) {
      setUrlsArray((prevUrlsArray) => [
        ...prevUrlsArray,
        {
          orgUrl: originalUrl,
          shortUrl: shortenedUrl,
        },
      ]);
      setOriginalUrl("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortenedUrl]);

  // saving the urlsArray to the localStorage

  useEffect(() => {
    if (urlsArray && urlsArray.length > 0) {
      localStorage.setItem("urlsArray", JSON.stringify(urlsArray));
    }
  }, [urlsArray]);

  return (
    <>
      <section className="shortener-wrapper horizontal-padding">
        <div className="shortener">
          <form className="shortener-form ">
            <input
              name="shortener-input"
              type="text"
              placeholder="Shorten a link here..."
              className={
                error
                  ? "shortener-input shortener-border-red"
                  : "shortener-input"
              }
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
            {!error && error.length === 0 ? null : (
              <div className="shortener-error-loading-wrapper">
                <p className="shortener-error-message">{error}</p>
              </div>
            )}
            {!loading ? null : (
              <div className="shortener-error-loading-wrapper">
                <p className="shortener-loading-message">Shortening...</p>
              </div>
            )}
            <Button
              onClick={handleShortenUrl}
              className="button-primary shortener-button"
            >
              Shorten It!
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};