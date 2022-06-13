import { Button, Link, Stack, StackProps, Text, VStack } from "@chakra-ui/react"
import { Image } from "blitz"
import { Shimmer } from "ds/atoms/Shimmer"
import EthereumCouncil from "public/ethereum-council.png"
import { HiExternalLink } from "react-icons/hi"

export const Ethereum: React.FC<StackProps> = (props) => {
  return (
    <Stack
      id="ethereum"
      py={32}
      direction={["column", null, null, null, "row"]}
      spacing={32}
      align="center"
      justify="space-between"
      {...props}
    >
      <VStack alignItems="center" animation="pulser 15s ease-in-out infinite alternate">
        <Image src={EthereumCouncil} alt="Together we prosper." />
        <Link
          opacity={0.5}
          display="flex"
          flexDirection="row"
          alignItems="center"
          textStyle="label"
          fontSize="sm"
          fontStyle="italic"
          isExternal
          target="_blank"
          href="https://ethereum.org"
        >
          Ethereum&nbsp;
          <HiExternalLink />
        </Link>
      </VStack>
      <VStack
        align="start"
        justify="flex-start"
        minW={[320, null, 420, 540]}
        spacing={8}
        animation="pulser 15s ease-in-out infinite alternate"
      >
        <Shimmer px={1} lineHeight={1}>
          A climate positive Web3
        </Shimmer>
        <Text fontSize="lg">
          Ethereum&rsquo;s Proof of Work CO<sub>2</sub> emissions will remain in the atmosphere for
          hundreds of years. As Ethereum transitions to a Proof of Stake blockchain, it&rsquo;s
          important to consider what it means to be <strong>truly climate positive</strong>.
        </Text>
        <Text fontSize="lg">
          Let&rsquo;s settle our carbon impact permanently, so that there is no question today nor
          in 1,000 years that Ethereum is climate positive.
        </Text>
        <Button as={Link} _hover={{ textDecoration: "none" }} href="#impact" size="lg">
          Let&rsquo;s fucking go climate positive
        </Button>
      </VStack>
    </Stack>
  )
}
