// models/LeetCard.js

class LeetCard {
  constructor(username, theme, font, extension, site, hosturl) {
    this.username = username || "devagn_maniya";
    this.theme = theme;
    this.font = font;
    this.extension = extension || "";
    this.site = site || "us";
    this.hosturl = hosturl || "http://127.0.0.1:3000";
  }

  validate() {
    if (!this.theme || !this.font) {
      throw new Error("Theme and font are required.");
    }
  }

  generateUrl() {
    this.validate();
    let url = `https://leetcard.jacoblin.cool/${encodeURIComponent(
      this.username
    )}?theme=${encodeURIComponent(this.theme)}&font=${encodeURIComponent(
      this.font
    )}`;
    if (this.extension) {
      url += `&ext=${encodeURIComponent(this.extension)}`;
    }
    if (this.site === "cn") {
      url += `&site=cn`;
    }
    const url2 = `${this.hosturl}/api/cardgen?username=${this.username}&theme=${this.theme}&font=${this.font}&extension=${this.extension}&site=${this.site}`;
    const data = `<embed src=${url}>`;
    return { data, url2 };
  }

  generateEmbed() {
    const { url2 } = this.generateUrl();
    return `<embed src="${url2}">`;
  }

  generateMarkdown() {
    const { url2 } = this.generateUrl();
    return `![LeetCode Stats](${url2})`;
  }
}

module.exports = LeetCard;
