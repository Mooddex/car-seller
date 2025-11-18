
interface buttonProps {
Sentence: string
Style ?: string
}
export default function Button({ Sentence, Style}: buttonProps) {
    return(
        <button
            className={`bg-orange-500 hover:bg-orange-600 text-white px-12 py-2 rounded-b-md transition font-semibold ${Style}`
    }>
           {Sentence}
          </button>
    )
}