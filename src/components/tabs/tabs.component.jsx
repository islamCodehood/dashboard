import { useEffect, useState } from "react";
import Tab from "../tab/tab.component";
const tabItems = [
  {id: "1", title: "MITRE", active: true, path: "/"},
  {id: "2", title: "Custom Base Layer", active: false, path: "/charts"},
]
const Tabs = () => {
  const [tabs, setTabs] = useState(tabItems)

  const toggleActive = (id) => {
    setTabs(tabs.map(tab => {
      if (tab.id === id) {
        return {...tab, active: true}
      } 
      return {...tab, active: false}
    }))
  }

  useEffect(() => {
    console.log(tabs)
  }, [tabs])
  return ( 
      <div className="flex">
        {
          tabs.map(tab => <Tab key={tab.id} toggleActive={toggleActive} {...tab} />)
        }

      </div>
   );
}
 
export default Tabs;