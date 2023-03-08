import { useState } from "react"
import { OrderProvider } from "./hooks/useCarts"
import { PaymentTab } from "./PaymentTab"
import { PurchaseTab } from "./PurchaseTab"
import { OrderInfo } from "./PurchaseTab/OrderInfo"
import { OrderOptions } from "./PurchaseTab/OrderOptions"
import {
  Container,
  OrderTabs,
  OrderTabLine,
  OrderTab,
  OrderTabCircle,
  OrderTabLabel,
  OrderFooter,
  OrderContent
} from "./styles"

function Order() {
  const [activeTab, setActiveTab] = useState<"purchase" | "payment">("purchase")

  function goNextPage() {
    setActiveTab("payment")
  }

  function goPreviousPage() {
    setActiveTab("purchase")
  }

  return <Container>
    <OrderProvider>
      <OrderTabs>
        <OrderTabLine />
        <OrderTab>
          <OrderTabCircle>1</OrderTabCircle>
          <OrderTabLabel>Dados da compra</OrderTabLabel>
        </OrderTab>
        <OrderTabLine enabled={activeTab === "payment"}/>
        <OrderTab enabled={activeTab === "payment"}>
          <OrderTabCircle>2</OrderTabCircle>
          <OrderTabLabel>Dados de pagamento</OrderTabLabel>
        </OrderTab>
        <OrderTabLine enabled={activeTab === "payment"}/>
      </OrderTabs>
      <OrderContent>
        {activeTab === "purchase"
          ? <PurchaseTab goNextPage={goNextPage}/>
          : <PaymentTab /> }
        <OrderFooter>
          <OrderInfo />
          <OrderOptions
            goNextPage={goNextPage}
            goPreviousPage={goPreviousPage}
            activeTab={activeTab}
          />
        </OrderFooter>
      </OrderContent>
    </OrderProvider>
  </Container>
}

export { Order }
