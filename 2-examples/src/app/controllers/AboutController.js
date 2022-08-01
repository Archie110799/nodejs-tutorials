export const index = (req,res) =>{
  res.render("about");
}

export const show = (req,res) =>{
  console.log(req.params);
    console.log(req.body);
    
    let data = {
      usersLead: [
        {
          createdAt: "2022-07-12T08:01:18.589Z",
          name: "Mr. Juanita Lindgren",
          avatar:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/682.jpg",
          category: 93,
          info: "info 1",
          profile: "profile 1",
          id: "1",
        },
        {
          createdAt: "2022-07-13T02:21:25.693Z",
          name: "Levi Hessel",
          avatar:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg",
          category: 81,
          info: "info 2",
          profile: "profile 2",
          id: "2",
        },
      ],
    };
    res.send(req.body);
}

