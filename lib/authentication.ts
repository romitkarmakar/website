export function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export async function getProfile() {
  let res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "/users/me", {
    headers: {
      Authorization: `Bearer ${localStorage.jwt}`,
    },
  });
  if (res.status == 200) {
    let response = await res.json();

    return response;
  } else if (res.status == 400) {
    throw new Error("Not authorized");
  } else {
    throw new Error("Internal Server Error");
  }
}
