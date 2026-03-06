export default {
  async fetch(request) {

    const url = new URL(request.url)

    if (url.pathname === "/config") {

      const config = await fetch(
        "https://raw.githubusercontent.com/03-25-03-smt/fmc-automation/main/config.json"
      )

      return new Response(await config.text(), {
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*"
        }
      })
    }

    if (url.pathname === "/script") {

      const script = await fetch(
        "https://raw.githubusercontent.com/03-25-03-smt/fmc-automation/main/script.js"
      )

      return new Response(await script.text(), {
        headers: {
          "content-type": "application/javascript",
          "access-control-allow-origin": "*"
        }
      })
    }

    return new Response("FMC Worker OK")
  }
}
