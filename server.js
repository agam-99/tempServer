const express = require("express");
const app = express();
console.log("DDDD");
app.get("/exercise", (req, res) => {
  console.log("DDDD");
  res.json({
    Chest: [
      {
        Title: "Pushups",
        Description:
          "The pushup is the exercise that builds both upper-body and core strength. Done properly, it is a compound exercise that uses muscles in the chest, shoulders, triceps, back, abs, and even the legs.",
        Type: "Lying",
        Sets: 3,
        Reps: "12-15",
        RepTime: 60,
        BreakTime: 30,
        Gif:
          "https://www.verywellfit.com/thmb/G_PLH6g6WFNoNbyCYOAmnt1HEUY=/1500x1000/filters:fill(FFDB5D,1)/Verywell-42-3498282-Pushup01-1596-5994a0f8519de20010b3bdd3.gif",
        Instructions: [
          "Get on the floor on all fours, positioning your hands slightly wider than your shoulders.",
          "Extend your legs back so that you are balanced on your hands and toes.",
          "Keep your body in a straight line from head to toe without sagging in the middle or arching your back.",
          "Before you begin any movement, contract your abs and tighten your core by pulling your belly button toward your spine.",
          "Inhale as you slowly bend your elbows and lower yourself until your elbows are at a 90-degree angle.",
          "Exhale as you begin contracting your chest muscles and pushing back up through your hands to the start position. "
        ]
      },
      {
        Title: "Inclined Pushups",
        Description:
          "This variation of pushups targets the main muscles of the chest, it also engages the shoulders(deltoid) and arms(triceps). They are the perfect compromise if you find that a standard pushup is too difficult ",
        Type: "Lying",
        Sets: 3,
        Reps: "12-15",
        RepTime: 60,
        BreakTime: 30,
        Gif:
          "https://www.verywellfit.com/thmb/JGdRP8hzrlafuO9VTVCfsQ4HqPE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/90-3120038--Incline-PushupsGIF-d321334ec54849539010832028d5635a.gif ",
        Instructions: [
          "Come onto your hands and knees with your weight balanced evenly between all four points.",
          "Place your hands on the edge of the bench just slightly wider than shoulder width. Align your feet so that your arms and body are completely straight.",
          "Bend your elbows to slowly lower your chest to the edge of the bench while inhaling. Keep your body straight and rigid throughout the movement.",
          "Push your body away from the bench until your elbows are extended, but not locked. Exhale as you push up.",
          "Keep going with slow, steady repetitions."
        ]
      },
      {
        Title: "Declined Pushups",
        Description:
          "The decline push up is an advanced upper body exercise that targets the muscles of the chest, shoulders, back, and arms.",
        Type: "Lying",
        Sets: 3,
        Reps: "12-15",
        RepTime: 60,
        BreakTime: 30,
        Gif:
          "https://www.verywellfit.com/thmb/-idT8oQ7lmPWk2yoDnAW_6mMSgA=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/91-3120037--Decline-PushupsGIF-eb1210abbdb04bbf94a05aafb644b24f.gif",
        Instructions: [
          "Kneel down with your back to the bench which can be as low as an inch or two or as high as 1 to 2 feet.",
          "Put your hands on the floor, shoulders over your wrists and elbows at 45 degrees. Place your feet on top of the bench.",
          "Brace your core, glutes, and quads. Bend your elbows and lower your chest to the floor while inhaling, keeping your back and neck straight.",
          "Push into the floor to return to starting position,exhaling and extending your elbows."
        ]
      }
    ]
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Server has started at port " + port);
});
