module.exports = {
  siteUrl: "https://moluccus.vercel.app", // Replace with your website's URL
  generateRobotsTxt: true, // Optional: Include this line if you want to generate a robots.txt file
  changefreq: "daily", // Set the change frequency for all pages
  priority: 0.7, // Set the priority for all pages
  exclude: ["/admin", "/secret", "/private"], // Exclude specific pages from the sitemap
};
