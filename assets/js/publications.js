document.addEventListener("DOMContentLoaded", () => {
  const explorer = document.querySelector("[data-publication-explorer]");
  if (!explorer) return;

  const search = explorer.querySelector("[data-publication-search]");
  const yearFilter = explorer.querySelector("[data-publication-year]");
  const topicFilter = explorer.querySelector("[data-publication-topic]");
  const results = explorer.querySelector("[data-publication-results]");
  const emptyState = explorer.querySelector("[data-publication-empty]");
  const publications = Array.from(explorer.querySelectorAll(".publication-card"));

  const years = [...new Set(publications.map((publication) => publication.dataset.year))].sort((a, b) => b - a);
  const topics = [
    ...new Set(publications.flatMap((publication) => publication.dataset.topics.split("|").map((topic) => topic.trim()))),
  ].sort();

  years.forEach((year) => yearFilter.add(new Option(year, year)));
  topics.forEach((topic) => topicFilter.add(new Option(topic, topic)));

  const render = () => {
    const query = search.value.trim().toLowerCase();
    const selectedYear = yearFilter.value;
    const selectedTopic = topicFilter.value;
    const matching = publications.filter((publication) => {
      const searchableText = ["h3", ".publication-authors", ".publication-venue"]
        .map((selector) => publication.querySelector(selector)?.textContent || "")
        .join(" ")
        .toLowerCase();
      const matchesSearch = !query || searchableText.includes(query);
      const matchesYear = selectedYear === "all" || publication.dataset.year === selectedYear;
      const matchesTopic = selectedTopic === "all" || publication.dataset.topics.split("|").includes(selectedTopic);
      return matchesSearch && matchesYear && matchesTopic;
    });

    results.replaceChildren();
    emptyState.hidden = matching.length !== 0;

    const grouped = matching.reduce((groups, publication) => {
      const year = publication.dataset.year;
      if (!groups.has(year)) groups.set(year, []);
      groups.get(year).push(publication);
      return groups;
    }, new Map());

    [...grouped.keys()]
      .sort((a, b) => b - a)
      .forEach((year) => {
        const section = document.createElement("section");
        section.className = "publication-year-group";
        const heading = document.createElement("h2");
        heading.textContent = year;
        const list = document.createElement("div");
        list.className = "publication-card-list";
        grouped.get(year).forEach((publication) => list.append(publication));
        section.append(heading, list);
        results.append(section);
      });
  };

  search.addEventListener("input", render);
  yearFilter.addEventListener("change", render);
  topicFilter.addEventListener("change", render);
  render();
});
