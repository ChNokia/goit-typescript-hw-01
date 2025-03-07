enum PageStatus {
  Open = "open",
  Close = "close",
}

type PageDetails = {
  createAt: Date;
  updateAt: Date;
};

interface PageData {
  title: string;
  likes: number;
  accounts: string[];
  status: PageStatus;
  details?: PageDetails;
}

const page1: PageData = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: PageStatus.Open,
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: PageData = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: PageStatus.Close,
};
