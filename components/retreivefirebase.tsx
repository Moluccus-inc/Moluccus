import { ref, onValue } from "firebase/database";
import { database } from "@/config/firebase";
import React from "react";
export function useFirebaseData() {
  const [data, setData] = React.useState<
    { childData: any; childKey: string | null }[]
  >([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(database, "moluccus/monograph/faq");
      onValue(dbRef, (snapshot) => {
        const fetchedData: { childData: any; childKey: string | null }[] = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          fetchedData.push({ childData, childKey });
        });
        setData(fetchedData);
      });
    };

    fetchData();
  }, []);

  return data;
}

export function useCaseStudyData() {
  const [data, setData] = React.useState<
    { childData: any; childKey: string | null }[]
  >([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(database, "moluccus/monograph/explore");
      onValue(dbRef, (snapshot) => {
        const fetchedData: { childData: any; childKey: string | null }[] = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          fetchedData.push({ childData, childKey });
        });
        setData(fetchedData);
      });
    };

    fetchData();
  }, []);

  return data;
}
