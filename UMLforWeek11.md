```mermaid
    classDiagram
    class Engines{
        int numOfRockets
        int speed
        float burnTime
        bool ignition()
        bool secondstage()
        bool thirdstage()
    }
    class RocketMake{
        string Manufacturer
        int amountOfThrust
        blast()
    }
    Engines <|-- RocketMake
    class Payload{
        int numOfCompartments
        double weightInTons
        int availableSpace
        bool open()
        bool release()
        int pressure()
    }
    class PayloadType{
        string objectType
        int amountOfSpace
        satellite()
    }
    Payload <|--PayloadType