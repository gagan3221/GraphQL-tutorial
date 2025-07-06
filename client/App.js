async function fetchGreeting() {
  const response = await fetch("http://localhost:9000", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      query: "query { greeting }",
    }),
  });
  const { data } = await response.json();
  return data.greeting;
}

fetchGreeting().then((greeting) => {
  document.getElementById("greeting").textContent = greeting;
});
