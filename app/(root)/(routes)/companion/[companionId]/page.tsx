import prismadb from '@/lib/prismadb'
import { CompanionForm } from './components/companion-form'

interface CompanionIdPageProps {
  params: {
    companionId: string
  }
}

const CompanioIdPage = async ({ params }: CompanionIdPageProps) => {
  const companion = await prismadb.companion?.findUnique({
    where: {
      id: params.companionId,
    },
  })

  const categories = await prismadb.category.findMany()

  return (
    <CompanionForm initialData={companion} categories={categories}>
      Hello Companion ID !
    </CompanionForm>
  )
}

export default CompanioIdPage
