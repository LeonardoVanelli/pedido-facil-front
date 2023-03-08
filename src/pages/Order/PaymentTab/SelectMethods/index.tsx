import { useEffect, useState } from "react"

import {
  listCardAdministratorService,
  listPaymentMethodService,
  listPaymentTypeService
} from "../../../../services"
import {
  IListCardAdministratorService
} from "../../../../services/interfaces/IListCardAdministratorService"
import {
  IListPaymentMethodService
} from "../../../../services/interfaces/IListPaymentMethodService"
import {
  IListPaymentTypeService
} from "../../../../services/interfaces/IListPaymentTypeService"
import { Container } from "./styles"
import { TypedStore } from "./TypesPayments/TypedStore"

function SelectMethods() {
  const [typePayments, setTypePayments] =
  useState<IListPaymentTypeService[]>([])
  const [methodPayments, setMethodPayments] =
  useState<IListPaymentMethodService[]>([])
  const [cardAdministrators, setCardAdministrators] =
  useState<IListCardAdministratorService[]>([])

  useEffect(() => {
    async function initPaymentTypes() {
      const typePaymentService = await listPaymentTypeService.execute()

      setTypePayments(typePaymentService)
    }

    initPaymentTypes()

    async function initPaymentMethods() {
      const methodPaymentService = await listPaymentMethodService.execute()

      setMethodPayments(methodPaymentService)
    }

    initPaymentMethods()

    async function initCardAdministrators() {
      const cardAdministratorService =
        await listCardAdministratorService.execute()

      setCardAdministrators(cardAdministratorService)
    }

    initCardAdministrators()
  }, [])

  const typePaymentOptions = typePayments.map(typePayment => ({
    value: typePayment.id,
    label: typePayment.description
  }))

  const methodPaymentOptions = methodPayments.map(methodPayment => ({
    value: methodPayment.id,
    label: methodPayment.description
  }))

  const cardAdministratorOptions = cardAdministrators.map(methodPayment => ({
    value: methodPayment.id,
    label: methodPayment.name
  }))

  return (<Container>
    <TypedStore
      typePaymentOptions={typePaymentOptions}
      methodPaymentOptions={methodPaymentOptions}
      cardAdministratorOptions={cardAdministratorOptions}
    />

  </Container>)
}

export { SelectMethods }
