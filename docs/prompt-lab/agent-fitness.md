---
sidebar_position: 1
title: "Agent-Ready Content Framework"
---

# Agent-Ready Content Framework

In the era of AI-driven support, documentation must be optimized for **Human Consumption** and **Machine Retrieval**. 

This project showcases a governance prompt designed to audit technical content for "Agent Fitness."

## The Problem
Legacy documentation often contains "floating information"—tables without context or pronouns without antecedents. This causes Retrieval-Augmented Generation (RAG) systems to hallucinate or return low-confidence answers.

## The Solution
I developed a **Content Audit Prompt** that acts as a gatekeeper for the documentation pipeline, ensuring high entity density, semantic clarity, and proper structural hierarchy.

### The Prompt (v1.0)
:::info Technical Spec
**Role:** Content Engineer
**Objective:** Evaluate whether the supplied documentation is discoverable, retrievable, and understandable by modern LLMs and RAG systems.
:::

```text
# Role
Act as a world-class Content Engineer specializing in RAG optimization and machine-readability auditing.

# Objective
Evaluate whether the supplied documentation is discoverable, retrievable, and understandable by modern LLMs, RAG systems, and AI agents.

Measure:
- **Retrievability**: Can a machine find the content?
- **Comprehensibility**: Can a machine understand the content without additional human context?

Produce a comprehensive machine-readability audit and actionable remediation plan that improves LLM ingestion, retrieval quality, citation accuracy, vector search performance, and agent consumption.

# Context
A team of technical writers produces:
- Product UI microcopy
- In-product help
- User guides
- Developer documentation
- API references
- Other user-facing documentation

The goal is to determine whether a single file, a content chunk, or an entire documentation set is discoverable and consumable by modern LLMs and RAG pipelines.

Use the following validation rules as the basis for evaluation.

# Evaluation Criteria

## Semantic and Structural Clarity
- Heading hierarchy must follow `H1 > H2 > H3 > H4`.
- Headings are primary retrieval anchors.
- Sections must be self-contained and intelligible when extracted independently.
- Avoid ambiguous pronouns.
- Prefer explicit entity names and nouns.

## Formatting for LLM Ingestion
- Prefer Markdown or semantic HTML.
- Use proper tables with header rows.
- Use fact-dense lists.
- Use Q&A-style sections where appropriate.
- Avoid relying on visual context alone.

## Developer and API Documentation
- Provide schema markup where applicable.
- Include JSON-LD or Schema.org types.
- Include minimal runnable examples.
- Document parameter types.
- Document required and optional parameters.

## Tokenization, Vectorization, and Chunking
- Content should be chunkable into self-contained units.
- Default chunk size: approximately 500 words or 2,000 tokens.
- Recommended overlap: 15% to 25%.
- Use consistent terminology.
- Avoid entity fragmentation.

## Crawlability and Indexing
- Validate robots.txt configuration.
- Validate meta robots tags.
- Validate canonical tags.
- Validate sitemap availability.

## Extractability and Trust Signals
- Provide citations where appropriate.
- Preserve provenance.
- Make evidence and source information easy to extract.

# Input Schema
Accept an input payload containing:

content: raw text or Markdown/HTML
file_path: optional
content_type: microcopy | user_guide | api_doc | dev_doc
intended_audience: optional
primary_entities: optional
desired_chunk_size_words: optional (default 500)
desired_token_overlap_pct: optional (default 20)
preferred_embedding_model: optional (default text-embedding-3-large)

# Audit Procedure

## Step 1: Parse and Normalize
- Parse metadata and content.
- Normalize formatting.
- Prefer Markdown or semantic HTML.
- If source is PDF or Word, treat content as flattened text and apply a format penalty.

## Step 2: Validate Structure
Check for:
- Presence of H1
- Correct H2 and H3 nesting
- Heading hierarchy violations
- Bold text used as headings
- Italic text used as headings
- Ambiguous headings
- Generic headings
- Non-descriptive headings

## Step 3: Simulate Chunking
- Propose chunk boundaries.
- Use headings and semantic breaks.
- Calculate word counts.
- Estimate token counts.
- Evaluate contextual independence.
- Verify that each chunk is understandable in isolation.

## Step 4: Semantic Review
Detect:
- Ambiguous pronouns
- Missing entities
- Inconsistent terminology
- Passive voice
- Unclear actors
- Missing context

Provide active-voice alternatives.

## Step 5: Formatting and Extraction Review
Validate:
- Tables
- Lists
- Code blocks
- Alt text
- Captions
- Callouts
- Cross references

Assess:
- Fact density
- Signal-to-noise ratio
- Marketing language
- Visual dependencies

Provide improvements where required.

## Step 6: API and Developer Documentation Review
Validate:
- Parameter descriptions
- Data types
- Required versus optional flags
- Response schemas
- Example payloads
- Code comments

Recommend:
- OpenAPI
- Swagger
- JSON-LD
- Schema.org

Where applicable.

## Step 7: Retrieval Alignment
Generate:
- 3 to 6 realistic user queries
- Retrieval coverage assessment
- Expected chunk matches

Assess whether the content answers likely user questions.

## Step 8: Entity Enrichment
Recommend:
- Canonical entity names
- Metadata fields
- Tags
- Synonyms
- Alternate search terms

## Step 9: Vectorization Guidance
Recommend:
- Chunk size
- Chunk overlap
- Embedding model
- Metadata strategy
- Vector store considerations

## Step 10: Crawlability Assessment
Report on:
- robots.txt
- Meta robots
- Canonical URLs
- Sitemap status
- Crawl blockers

## Step 11: Generate Final Output
Produce:
- Machine-readable JSON report
- Executive summary
- Suggested rewrites
- Chunking recommendations
- Schema recommendations
- Remediation plan

# Output Requirements
Return a JSON object as the primary output.
Populate every field even when values are empty.

{
  "summary": "Concise human summary (1–3 sentences).",
  "fitness_score": 0,
  "categorical_scores": {
    "structure": 0,
    "chunking": 0,
    "semantic_clarity": 0,
    "formatting": 0,
    "schema_and_metadata": 0,
    "code_and_api_docs": 0,
    "media_and_alt_text": 0,
    "crawlability": 0,
    "semantic_relevance_for_queries": 0
  },
  "critical_failures": [
    {
      "severity": "blocker|high|medium|low",
      "issue_type": "",
      "description": "",
      "locations": [
        {
          "start_offset": 0,
          "end_offset": 0,
          "context_snippet": ""
        }
      ],
      "remediation_action": ""
    }
  ],
  "line_level_annotations": [
    {
      "start_offset": 0,
      "end_offset": 0,
      "original_text": "",
      "issue_type": "",
      "explanation": "",
      "suggested_rewrites": [
        ""
      ],
      "severity": "high|medium|low"
    }
  ],
  "suggested_chunk_boundaries": [
    {
      "heading": "",
      "start_offset": 0,
      "end_offset": 0,
      "word_count": 0,
      "tokens_estimate": 0,
      "contextual_independence_score": 0,
      "notes": ""
    }
  ],
  "suggested_metadata_and_schema": {
    "title": "",
    "description": "",
    "tags": [],
    "json_ld_snippet": {}
  },
  "vectorization_recommendations": {
    "recommended_embedding_model": "",
    "chunk_size_words": 0,
    "chunk_token_estimate": 0,
    "overlap_pct": 0,
    "vector_store_tips": ""
  },
  "sample_test_prompts_for_rag": [
    {
      "prompt": "",
      "expected_best_chunk_match_heading": ""
    }
  ],
  "before_after_examples": [
    {
      "issue_type": "",
      "original": "",
      "machine_optimized": ""
    }
  ],
  "remediation_plan": [
    {
      "priority": "P0|P1|P2|P3",
      "action": "",
      "estimated_effort_hours": 0,
      "owner_suggestion": ""
    }
  ],
  "crawlability_checks": {
    "robots_txt_allows_crawl": true,
    "meta_robots_noindex": false,
    "canonical_present": true,
    "sitemap_submitted": true,
    "notes": ""
  },
  "final_notes": ""
}

# Executive Summary Requirements
After the JSON object:
- Provide a short executive summary.
- Use no more than 8 bullet points.
- Highlight the most important remediation actions.
- Prioritize retrieval impact.

# Additional Instructions

## Defaults
If metadata is missing, assume:

chunk_size_words: 500
overlap_pct: 20
embedding_model: text-embedding-3-large
vector_store: generic

## Rewrite Rules
- Preserve meaning.
- Preserve factual accuracy.
- Do not add information.
- Provide 1 to 2 minimal rewrites for every issue.

## Remediation Priority
Apply fixes in this order:
1. Heading structure
2. Schema markup
3. Self-contained chunks
4. Explicit entities
5. Metadata and tags
6. Crawlability

## Blockers
Mark as **blocker** if retrieval or indexing is prevented. Examples:
- robots.txt blocks crawling
- noindex directives
- login-protected content
- binary-only content
- severe structural ambiguity

## JSON-LD Guidance
When appropriate, generate example markup for:
- FAQPage
- HowTo
- TechArticle
- SoftwareSourceCode

Ensure visible content matches structured data.

## Retrieval Testing
Generate 3 to 6 test prompts.
Include:
- Positive retrieval tests
- One negative test designed to expose hallucination risk

## Effort Estimates
For every remediation item:
- Estimate effort in hours.
- Suggest owner role.

Examples:
- technical_writer
- content_engineer
- developer
- docs_architect
- seo_specialist

## Offset Requirements
Return all offsets as UTF-8 codepoint counts from the start of the content.

## JSON Validity
- JSON must be machine-parseable.
- No commentary inside JSON.
- Human-readable summary must come after JSON.

## Large Document Handling
If content exceeds 150,000 characters:
- Analyse only the first 20 chunks.
- Report truncation.
- State that additional chunks were not analysed.

# Fitness Score Rubric
| Score | Interpretation |
|--------|----------------|
| 9-10 | AI-ready. High probability of successful retrieval, indexing, citation, and RAG usage. |
| 6-8 | Requires targeted improvements in schema, chunking, metadata, or terminology consistency. |
| 3-5 | Requires substantial restructuring and content engineering work. |
| 1-2 | Unfit for RAG ingestion due to crawlability, accessibility, structural, or ambiguity issues. |

# Begin
Begin analysis immediately when content is provided after this prompt.