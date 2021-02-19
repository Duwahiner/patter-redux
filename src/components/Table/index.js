import { useTheme } from '@emotion/react'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Flex } from 'rebass'
// import BarLoader from 'react-spinners/BarLoader'
import DescribeHeadTable from '../DescribeHeadTable'
import RelsultItemsTable from '../RelsultItemsTable'
import SelectInput from '../SelectInput'
import { Title } from '../Title'
import { Container, ContentDescibe, ContentResulItems, ContentTable } from './style'

const Table = memo((props) => {
  const { rurrentData } = useSelector((state) => state)
  const theme = useTheme()

  return (
    <Container
      width={1} mt='19px' flexDirection='column'
    >
      <Flex width={1} mb={50}>
        <Flex width={1 / 1.6}>
          <SelectInput />
        </Flex>

        <Flex width={1 / 2} flexDirection='column'>
          <Flex width={1} mb={10}>
            <Flex
              width={1 / 2}
              justifyContent={['flex-end']}
              py={15}
              mr={40}
            >
              <Title
                as='h2'
                color={theme.text.secundary}
                fontSize={['18px']}
                fontFamily='RalewayExtraBold'
                style={{ textAlign: 'center' }}
              > ID OFERTA
              </Title>
            </Flex>

            <Flex
              width={1 / 2}
              py={15}
              justifyContent={['center']}
              sx={{
                border: `solid 1px ${theme.colors.border}`
              }}
            >
              <Title
                as='h2'
                color={theme.text.secundary}
                fontSize={['15px']}
                fontFamily='RalewayRegular'
                style={{ textAlign: 'center' }}
              > {rurrentData[0]?.versions[0].id}
              </Title>
            </Flex>
          </Flex>

          <Flex width={1}>
            <Flex
              width={1 / 2}
              justifyContent={['flex-end']}
              py={15}
              mr={40}
            >
              <Title
                as='h2'
                color={theme.text.secundary}
                fontSize={['18px']}
                fontFamily='RalewayExtraBold'
                style={{ textAlign: 'center' }}
              > NOMBRE
              </Title>
            </Flex>

            <Flex
              width={1 / 2}
              py={15}
              justifyContent={['center']}
              sx={{
                border: `solid 1px ${theme.colors.border}`
              }}
            >
              <Title
                as='h2'
                color={theme.text.secundary}
                fontSize={['15px']}
                fontFamily='RalewayRegular'
                style={{ textAlign: 'center' }}
              > {rurrentData[0]?.versions[0].name}
              </Title>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <ContentTable width={1} flex='auto' mt='0px' flexDirection='column'>
        <ContentDescibe>
          <DescribeHeadTable />
        </ContentDescibe>

        <ContentResulItems flexDirection='column' alignItems='center'>
          <RelsultItemsTable />
        </ContentResulItems>
      </ContentTable>
    </Container>
  )
})

export default Table
