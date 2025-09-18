import React from 'react';

interface TextLimitProps {
  value: string;
  maxLength: number;
  tag: 'p' | 'div';
}

const TextLimit: React.FC<TextLimitProps> = ({ value, maxLength, tag }) => {
  if (!value) {
    return null;
  }

  let summarizedValue = value.substring(0, maxLength);
  if (value.length > maxLength) {
    summarizedValue += '...';
  }

  const containsHtmlTags = (val: string) => {
    const htmlRegex = /<[a-z][\s\S]*>/i;
    return htmlRegex.test(val);
  };

  const sanitizeAndTrustHtml = (htmlString: string) => {
    return { __html: htmlString };
  };

  if (containsHtmlTags(value)) {
    const sanitizedValue = sanitizeAndTrustHtml(summarizedValue);
    return tag === 'p' ? (
      <p dangerouslySetInnerHTML={sanitizedValue} />
    ) : (
      <div dangerouslySetInnerHTML={sanitizedValue} />
    );
  }

  return tag === 'p' ? <p>{summarizedValue}</p> : <div>{summarizedValue}</div>;
};

export default TextLimit;
